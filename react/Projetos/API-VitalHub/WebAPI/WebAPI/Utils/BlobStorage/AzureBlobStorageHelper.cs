using Azure.Storage.Blobs;
using System.Reflection;

namespace WebAPI.Utils.BlobStorage
{
    public static class AzureBlobStorageHelper
    {
        //retorna a URL da imagem
        public static async Task<string> UploadImageBlobAsync(IFormFile arquivo, string stringConexao, string nomeContainer)
        {
            try
            {
                //verifica se existe um arquivo
                if (arquivo != null)
                {
                    //gera um nome unico + a extensao do arquivo como nome do blob
                    var blobName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(arquivo.FileName);

                    //cria uma instancia do client blobService e passa a string de conexao cm parametro
                    var blobServiceClient = new BlobServiceClient(stringConexao);

                    //obtem um container client usando o nome do container do blob onde a img vai ser salva 
                    var blobContainerClient = blobServiceClient.GetBlobContainerClient(nomeContainer);

                    //obtem um blob client usando o nome do container (blobName)
                    var blobClient = blobContainerClient.GetBlobClient(blobName);


                    //abre o fluxo de entrada do arquivo(foto)
                    using (var stream = arquivo.OpenReadStream())
                    {
                        //carrega o arquivo(foto) para o blobStorage de forma assincrona
                        await blobClient.UploadAsync(stream, true);
                    }

                    //transforma a uri em string e retorna p o metodo se for diferente de nulo
                    return blobClient.Uri.ToString();
                }
                else
                {
                    //se for nulo retorna a uri de uma imagem padrao
                    return "https://blolbvitalhubcatarina.blob.core.windows.net/containervitalhubcatarina/imagemPadrao.jpg";
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}

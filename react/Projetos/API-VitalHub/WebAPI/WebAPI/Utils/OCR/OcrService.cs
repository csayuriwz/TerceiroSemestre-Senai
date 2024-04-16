using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;

namespace WebAPI.Utils.OCR
{
    public class OcrService
    {
        private readonly string _subscriptKey = "ad9f8c32637a463a84c8eb2821e6e159";

        private readonly string _endpoint = "https://cvvitalhubcatarina.cognitiveservices.azure.com/";

        public async Task<string> RecognizeTextAsync(Stream imageStream)
        {
            try
            {
                var client = new ComputerVisionClient(new ApiKeyServiceClientCredentials(_subscriptKey))
                {
                    Endpoint = _endpoint
                };

                var ocrResult = await client.RecognizePrintedTextInStreamAsync(true, imageStream);

                return ProcessRecognitionResult(ocrResult);
            }
            catch (Exception ex)
            {
                return "Erro ao reconhecer o texto";
            }
        }

        private static string ProcessRecognitionResult(OcrResult result)
        {
            try
            {
                string recognizedText = "";

                foreach (var region in result.Regions) 
                { 
                    foreach (var line in region.Lines)
                    {
                        foreach (var word in line.Words)
                        {
                            recognizedText += word.Text + " ";
                        }
                        recognizedText += "\n";

                    }
                }

                return recognizedText;
            }
            catch (Exception ex)
            {

                return ex.Message;
            }
        }

    }
}

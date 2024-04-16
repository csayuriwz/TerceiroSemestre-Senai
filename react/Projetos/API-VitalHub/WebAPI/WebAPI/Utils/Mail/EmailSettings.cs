
namespace WebAPI.Utils.Mail
{
    public class EmailSettings
    {

        //email do remetente
        public string? Email { get; set; }

        //senha do remetente
        public string? Password { get; set; }

        //host do servidor SMTP (simple mail transfer protocol)
        public string? Host { get; set; }

        //nome exibido do remetente
        public string? DisplayName { get; set; }

        //Porta do servidor SMTP
        public int Port { get; set; }
       
    }
}

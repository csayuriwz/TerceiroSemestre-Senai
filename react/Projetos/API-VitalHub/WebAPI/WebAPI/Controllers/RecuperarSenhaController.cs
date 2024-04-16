using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Contexts;
using WebAPI.Domains;
using WebAPI.Utils.Mail;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecuperarSenhaController : ControllerBase
    {

        private readonly VitalContext _context;
        private readonly EmailSendingService _emailSendingService;
        public RecuperarSenhaController(VitalContext context, EmailSendingService sendEmail)
        {
            _context = context;
            _emailSendingService = sendEmail;
        }

        [HttpPost]
        public async Task<IActionResult> SendRecoveryCodePassword(string email)
        {
            try
            {
                var user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

                if (user == null) 
                {
                    return NotFound("Usuario nao encontrado!");
                
                }

                //gerar um codigo com 4 algarismos

                Random randow = new Random();
                int recoveryCode = randow.Next(1000,9999);

                user.CodRecupSenha = recoveryCode;

                await _context.SaveChangesAsync();

                await _emailSendingService.SendRecovery(user.Email!, recoveryCode);

                return Ok("Codigo enviado com sucesso!");

            }
            catch (Exception ex)
            {

               return BadRequest(ex.Message);
            }
        }

        //crie um controller para validar o codigo enviado para o email
        //se o codigo for igual, resete o codigo anterior no banco e devolva um status code informando se o codigo é valido 

        [HttpPost("Comparar")]
        public async Task<IActionResult> ValidateRecoveryCodePassword(int codigo, string email)
        {

            try
            {
               var user = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == email);

                if(user == null) 
                {
                    return NotFound("Usuario nao encontrado");
                }

                if (user.CodRecupSenha != codigo)
                {
                    return BadRequest("Codigo de recuperacao incorreto");
                }

                user.CodRecupSenha = null;

                await _context.SaveChangesAsync();
                return Ok("codigo de recuperacao valido!");
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
    }
}

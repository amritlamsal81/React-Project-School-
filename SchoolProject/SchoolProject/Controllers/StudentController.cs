using Microsoft.AspNetCore.Mvc;
using SchoolProject.Models;

namespace SchoolProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // So final route = /api/Student/Login
    public class StudentController : ControllerBase
    {
        [HttpPost("Login")]
        public IActionResult Login([FromBody] Login login)
        {
            // Simulated login logic (replace with real DB check)
            if (login.Username == "admin" && login.Password == "password" && login.Initial == "stu")
            {
                return Ok(new LoginResponse
                {
                    Username = login.Username,
                    Success = true,
                    Message = "Login successful!"
                });
            }

            return Unauthorized(new LoginResponse
            {
                Username = login.Username,
                Success = false,
                Message = "Invalid credentials"
            });
        }
    }
}

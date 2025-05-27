namespace SchoolProject.Models
{
    public class Login
    {
        public string Initial { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class LoginResponse
    {
        public string Username { get; set; }
        public bool Success { get; set; }
        public string Message { get; set; }
    }
}


using Microsoft.AspNet.Identity.EntityFramework;

namespace AngularJsAuthentication.Repository.Models
{
    public class AuthContext : IdentityDbContext<IdentityUser>
    {
        public AuthContext() : base("AuthContext") { }
    }
}

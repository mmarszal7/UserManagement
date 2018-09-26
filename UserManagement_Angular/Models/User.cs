using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UserManagement_Angular.Models
{
    public class User
    {
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; }

        public string Email { get; set; }

        public DateTime CreationDate { get; set; }

        public virtual List<UserGroups> UserGroups { get; set; }
    }
}
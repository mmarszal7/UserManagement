using System.Collections.Generic;

namespace UserManagement_Angular.Models
{
    public class Group
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public virtual List<UserGroups> UserGroups { get; set; }
    }
}
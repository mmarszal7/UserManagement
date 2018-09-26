using Microsoft.EntityFrameworkCore;
using System;

namespace UserManagement_Angular.Models
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Group> Groups { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserGroups>()
                .HasKey(bc => new { bc.UserId, bc.GroupId });

            modelBuilder.Entity<UserGroups>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.UserGroups)
                .HasForeignKey(bc => bc.UserId);

            modelBuilder.Entity<UserGroups>()
                .HasOne(bc => bc.Group)
                .WithMany(c => c.UserGroups)
                .HasForeignKey(bc => bc.GroupId);

            modelBuilder.Entity<User>().HasData(
                new { Id = 1, Name = "John", Email = "john@doe.com", CreationDate = DateTime.Now },
                new { Id = 2, Name = "Tom", Email = "tom@jerry.com", CreationDate = DateTime.Now },
                new { Id = 3, Name = "Frank", Email = "frank@goodman.com", CreationDate = DateTime.Now }
            );

            modelBuilder.Entity<Group>().HasData(
                new { Id = 1, Name = "Employees" },
                new { Id = 2, Name = "Managers" }
            );
        }
    }
}

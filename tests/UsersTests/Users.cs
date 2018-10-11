using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Threading.Tasks;
using UserManagement_Angular.Controllers;
using UserManagement_Angular.Models;

namespace UserManagement_Angular.Tests
{
    [TestClass]
    public class Users_
    {
        UsersController _controller;

        public Users_(DBContext dBContext)
        {
            _controller = new UsersController(dBContext);
        }

        [TestMethod]
        public async Task FetchingAll()
        {
            var result = _controller.GetUsers();

            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(List<User>));
            Assert.Equals(((List<User>)result).Count, 3);
        }

        [TestMethod]
        public async Task AreFetchSuccessfully()
        {
            var actionResult = await _controller.GetUser(1);
            var result = actionResult as OkObjectResult;

            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result.Value, typeof(User));
        }
    }
}

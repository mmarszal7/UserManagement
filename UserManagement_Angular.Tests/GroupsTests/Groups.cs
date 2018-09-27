using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Threading.Tasks;
using UserManagement_Angular.Controllers;
using UserManagement_Angular.Models;

namespace UserManagement_Angular.Tests
{
    [TestClass]
    public class Groups_
    {
        GroupsController _controller;

        public Groups_(GroupsController controller)
        {
            _controller = controller;
        }

        [TestMethod]
        public async Task FetchingAll()
        {
            var result = _controller.GetGroups();

            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(List<Group>));
            Assert.Equals(((List<User>)result).Count, 3);
        }

        [TestMethod]
        public async Task AccessingByID()
        {
            var actionResult = await _controller.GetGroup(1);
            var result = actionResult as OkObjectResult;

            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result.Value, typeof(Group));
        }
    }
}

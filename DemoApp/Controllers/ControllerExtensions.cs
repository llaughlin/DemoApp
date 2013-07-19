namespace DemoApp.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;


    public static class ControllerExtensions
    {

        public static IEnumerable<string> GetErrorMessages(this ModelStateDictionary modelState)
        {
            return modelState.SelectMany(x => x.Value.Errors.Select(error => error.ErrorMessage));
        }
    }
}
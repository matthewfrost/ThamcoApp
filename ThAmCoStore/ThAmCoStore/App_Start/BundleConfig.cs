using System.Web;
using System.Web.Optimization;

namespace ThAmCoStore
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/libs").Include("~/Scripts/libs/*.js").Include("~/Scripts/libs/*.min.js"));
            // bundles.Add(new ScriptBundle("~/bundles/views").Include("~/Scripts/views/*.js"));
            bundles.Add(new ScriptBundle("~/bundles/detailscripts").Include("~/Scripts/views/Thamco.View.Details.js").Include("~/Scripts/viewmodels/Thamco.ViewModel.Details.js"));
            bundles.Add(new ScriptBundle("~/bundles/homescripts").Include("~/Scripts/views/Thamco.View.Index.js").Include("~/Scripts/viewmodels/Thamco.ViewModel.Index.js"));
            bundles.Add(new ScriptBundle("~/bundles/createscripts").Include("~/Scripts/views/Thamco.View.Create.js").Include("~/Scripts/viewmodels/Thamco.ViewModel.Create.js"));
            bundles.Add(new ScriptBundle("~/bundles/cartscripts").Include("~/Scripts/views/Thamco.View.Cart.js").Include("~/Scripts/viewmodels/Thamco.ViewModel.Cart.js"));
            bundles.Add(new ScriptBundle("~/bundles/orderscripts").Include("~/Scripts/views/Thamco.View.Order.js").Include("~/Scripts/viewmodels/Thamco.ViewModel.Order.js"));
            bundles.Add(new ScriptBundle("~/bundles/viewmodels").Include("~/Scripts/viewmodels/*.js"));
            bundles.Add(new ScriptBundle("~/bundles/controllers").Include("~/Scripts/controllers/*.js"));
            bundles.Add(new ScriptBundle("~/bundles/models").Include("~/Scripts/models/*.js"));
            bundles.Add(new ScriptBundle("~/bundles/testing").Include("~/Scripts/viewmodels/*.js").Include("~/Scripts/controllers/*.js").Include("~/Scripts/models/*.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}

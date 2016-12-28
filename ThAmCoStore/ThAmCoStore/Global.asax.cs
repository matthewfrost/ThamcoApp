using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using ThAmCoStore.App_Start;
using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using IDataSources;
using MockStore;
namespace ThAmCoStore
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            var container = new Container();
            container.Options.DefaultScopedLifestyle = new WebApiRequestLifestyle();

            container.Register<IUserSource, UserSource>(Lifestyle.Transient);
            container.Register<ISelectionBoxSource, SelectionBoxSource>(Lifestyle.Transient);
            container.Register<IProductSource, ProductSource>(Lifestyle.Transient);
            container.Register<IWrappingSource, WrappingSource>(Lifestyle.Transient);
            container.Register<IDodgyDealersOrders, DodgyDealersOrders>(Lifestyle.Transient);
            container.Register<IUndercutersOrders, UndercuttersOrders>(Lifestyle.Transient);
            container.Register<IBazzasBazaarOrders,BazzasBazaarOrders>(Lifestyle.Transient);
            container.Register<IKhansKwikimartOrders, KhansKwikimartOrders>(Lifestyle.Transient);
            container.Register<ISelectionBoxOrders, SelectionBoxOrders>(Lifestyle.Transient);
            container.Verify();

            GlobalConfiguration.Configuration.DependencyResolver = new SimpleInjectorWebApiDependencyResolver(container);
        }
    }
}

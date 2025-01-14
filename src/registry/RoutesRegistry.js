import modulesRoutesRegistry from "../modules/modules.routes.registry";

export const RoutesRegistry = {
  About: {
    Page        : { appComponent: "About", layout: "WrappidAppLayout" },
    authRequired: false,
    entityRef   : "about",
    url         : "about"
  }, 
  Layouts: {
    Page        : { appComponent: "Layouts", layout: "WrappidAppLayout" },
    authRequired: false,
    entityRef   : "layouts",
    url         : "layouts"
  }, 
  defaultAuthRoute: {
    Page        : { appComponent: "AppComponent", layout: "WrappidUserLayout" },
    authRequired: true,
    entityRef   : "defaultAuthRoute",
    url         : "defaultAuthRoute"
  },  
  defaultRoute: {
    Page        : { appComponent: "AppComponent", layout: "WrappidGuestLayout" },
    authRequired: false,
    entityRef   : "defaultAppRoute",
    url         : "defaultAppRoute"
  }, 
  ...modulesRoutesRegistry
};
export class App {
	configureRouter(config, router) {
		this.router = router;

		config.map([
			{
				route: ["","github"],
				moduleId: "./pages/github",
				nav: true,
				title: "Github"
			},
			{
				route: "about",
				moduleId: "./pages/about",
				nav: true,
				title: "About"
			} 
		]);
	}
}

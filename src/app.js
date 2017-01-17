export class App {
	configureRouter(config, router) {
		this.router = router;

		config.map([
			{
				route: ["","github"],
				moduleId: "github",
				nav: true,
				title: "Github"
			},
			{
				route: "about",
				moduleId: "about",
				nav: true,
				title: "About"
			} 
		]);
	}
}

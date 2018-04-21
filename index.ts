/**
 * Created by user on 2018/4/22/022.
 */

import { Application } from 'typedoc/dist/lib/application';
import MyTypeDocPlugin from './plugin';

export = (PluginHost: Application, td) =>
{
	const app = PluginHost.owner;
	//app.converter.addComponent('markdown', MyTypeDocPlugin);

	app.application.renderer.addComponent(MyTypeDocPlugin.PLUGINID, MyTypeDocPlugin);
}

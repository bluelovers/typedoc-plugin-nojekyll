/**
 * Created by user on 2018/4/22/022.
 */

import * as Path from 'path';
import * as FS from 'fs-extra';

//import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';
import { Component, RendererComponent } from 'typedoc/dist/lib/output/components';

import { RendererEvent } from 'typedoc/dist/lib/output/events';

@Component({ name: 'nojekyll' })
export class NoJekyllTypeDocPlugin extends RendererComponent
{
	static PLUGINID = 'nojekyll';

	initialize()
	{
		this.listenTo(this.owner, {
			[RendererEvent.BEGIN]: this.onRendererBegin
		});
	}

	private onRendererBegin(event: RendererEvent)
	{
		const nojekyll = Path.join(event.outputDirectory, '.nojekyll');

		FS.ensureFile(nojekyll);
	}
}

export default NoJekyllTypeDocPlugin;

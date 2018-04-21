import { RendererComponent } from 'typedoc/dist/lib/output/components';
export declare class NoJekyllTypeDocPlugin extends RendererComponent {
    static PLUGINID: string;
    initialize(): void;
    private onRendererBegin(event);
}
export default NoJekyllTypeDocPlugin;

import { Component,Input } from '@angular/core'
export interface IToolTip{
    title:string,
    content:string
}
@Component({
    selector:'tooltip',
    templateUrl:'./tooltip.component.html',
    styleUrls:['./tooltip.component.css']
})

export class ToolTipComponent {
@Input() toolTipData:IToolTip

}
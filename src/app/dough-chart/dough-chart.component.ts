import { Component, OnInit } from '@angular/core';
import * as chart from 'chart.js';
@Component({
  selector: 'app-dough-chart',
  templateUrl: './dough-chart.component.html',
  styleUrls: ['./dough-chart.component.css']
})
export class DoughChartComponent implements OnInit {
   public percent=80;
  public color="#4048CC";
  public canvasName="doughnutchart";
  constructor() { }

  ngOnInit(): void {
    this.createChart()

  }
  createChart(){
    var ref = <HTMLCanvasElement>document.getElementById(this.canvasName)
    var ctx:any = ref.getContext('2d')
    const mychart = new chart(ctx,{
      type:'doughnut',
      data:{
        datasets:[
          {
            data:[this.percent , 100-this.percent],
            backgroundColor:[this.color],
            borderWidth:0
          }
        ]
      },
      options:{
        cutoutPercentage:86,
        responsive:false,
        tooltips:{
          enabled:false
        }
      }
    })
    var domString = 
    '<div class="chart__value d-flex justify-content-center" style="display:grid;position:absolute;top:-32px;left:362px;height:200px;width:16px"><p style="font-size:17px;margin:auto;padding-left:6px;color:#000000">' + this.percent + '%</p></div>'; // String holding markup for above created element
    var chartcontainer:any= document.getElementById("chartContainer")
     var divelement = document.createElement('div')
    divelement.innerHTML =  domString
    chartcontainer.appendChild(divelement.firstChild)
   }
}

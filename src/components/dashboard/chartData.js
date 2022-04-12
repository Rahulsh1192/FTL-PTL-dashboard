import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class StackedColumnChart extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: false,
            colorSet:"green",
			title: {
				text: "",
				fontFamily: "verdana"
			},
            axisX:{
                interval:1  
            },
			axisY: {
				title: "",
				prefix: "",
				suffix: "L"
			},
			toolTip: {
				shared: true,
				reversed: true
			},
			legend: {
                fontSize:15,
				verticalAlign: "top",
				horizontalAlign: "center",
                
				reversed: true,
                // dockInsidePlotArea: false,
                // position:"Custom",
                // location:{x:0,y:0},
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [
			{
                indexLabelFontSize: 25,
                indexLabelFontFamily:"Lucida Console" 
                ,indexLabelTextAlign:"right"
                ,indexLabel: "12", 
                indexLabelFontColor: "white", 
                indexLabelOrientation: "horizontal", 
                indexLabelPlacement: "inside",
				type: "column",
				name: "Profit",
                color:"#40B0CB",
				showInLegend: true,
				yValueFormatString: "#,###k",
                markerType:"square",
                markerSize:20,
                valueRepresents: "area",
                legendMarkerType:"circle",
				dataPoints: [
					{ label: "Jan", y: 14 },
					{ label: "Feb", y: 12 },
					{ label: "Mar", y: 14 },
					{ label: "Apr", y: 13 },
					{ label: "May", y: 13 },
					{ label: "Jun", y: 13 },
					{ label: "Jul", y: 14 },
					{ label: "Aug", y: 14 },
					{ label: "Sept", y: 13 },
					{ label: "Oct", y: 14 },
					{ label: "Nov", y: 14 },
					{ label: "Dec", y: 14 }
				]
			},
			{
                indexLabelFontSize: 25,
                indexLabelFontFamily:"Lucida Console" 
                ,indexLabelTextAlign:"right"
                ,indexLabel: "12", 
                indexLabelFontColor: "white", 
                indexLabelOrientation: "horizontal", 
                indexLabelPlacement: "inside",
				type: "column",
				name: "Vender Payment",
                color:"#E86967",
				showInLegend: true,
                legendMarkerType:"circle",
                // axisXType: "secondary",
				yValueFormatString: "#,###k",
				dataPoints: [
					{ label: "Jan", y: 13 },
					{ label: "Feb", y: 13 },
					{ label: "Mar", y: 15 },
					{ label: "Apr", y: 16 },
					{ label: "May", y: 17 },
					{ label: "Jun", y: 17 },
					{ label: "Jul", y: 18 },
					{ label: "Aug", y: 18 },
					{ label: "Sept", y: 17 },
					{ label: "Oct", y: 18 },
					{ label: "Nov", y: 18 },
					{ label: "Dec", y: 18 }
				]
			},
		
        ]
		}
		
		return (
		<div>
			
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			
		</div>
		);
	}
}

export default StackedColumnChart;
import { Component,ViewChild, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	linearModel: tf.Sequential;
	prediction: any;
	ngOnInit(){
		this.trainNewModel();
	
	}

	async trainNewModel(): Promise<any> {
		this.linearModel = tf.sequential();
		this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));

		this.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

		const xs = tf.tensor1d([3.2,4.4,5.5,6.71,6.98,7.168,9.779,6.182]);
		const ys = tf.tensor1d([1.6,2.7,2.9,3.19,1.684,2.53,3.366,2.596]);

		await this.linearModel.fit(xs,ys);
		console.log('model trained');
	}

	predict(val: number) {
	  const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
  	this.prediction = Array.from(output.dataSync())[0]
	}

	function parse (){
		console.log("parsing....")
		var file = document.getElementById("file").files[0];
		Papa.parse(file, {
			complete: function(results){
				console.log(results);
			}
		});
	}



}

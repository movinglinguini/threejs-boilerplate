/**
* @author Luis Angel Garcia
*/

import { SceneManager } from './scene-manager.js';

/**
 * This class attaches the renderer dom element to the DOM and handles updating the screen.
*/

export class Engine {
	/**
	 * @param {Node} containerEl
	 * The HTML element to append the renderer to.
	 */
	constructor(containerEl) {
		const containerBB = containerEl.getBoundingClientRect();

		this._container = containerEl;
		this._sceneManager = SceneManager({
			fov: 45,
			aspect: (this._container.width / this._container.height),
			near: 1,
			far: 10000,
			defaultPosition: {
				x: 400, y: 200, z: 0,
			},
		});

		this._container.appendChild(this._sceneManager.RENDERER.domElement);

		this._lastDrawCall = new Date().getTime();

		this._update = (delta) => {};

		requestAnimationFrame(this._updateRoutine.bind(this));
	}

	/**
	 * 
	 * @param {any} obj
	 * A single or array of THREE Object3D
	 * 
	 * @description
	 * Adds the object(s) to the scene model.
	 */
	addObject(obj) {
		this._sceneManager.addToScene(obj);
	}
	
	/**
	 * @param {any} obj
	 * A single or array of THREE Object3D
	 * 
	 * @description
	 * Removes the object(s) from the scene model.
	 */
	removeObject(obj) {
		this._sceneManager.addToScene(obj);
	}
	
	/**
	 *  @param {(number) => void} func
	 *  Any function that accepts a number
	 * 
	 * 	@description 
	 *  Sets func as the update function to be called before the scene is updated every frame.
	 */
	setUpdateFunction(func) {
		this.update = func;
	}
	
	/**
	 * @description
	 * Calls the update function with the time spent between each frame as the parameter.
	 * Updates the scene.
	 */
	_updateRoutine() {
		const newDrawCall = new Date().getTime();
		const dt = newDrawCall - this._lastDrawCall;
		this._lastDrawCall = newDrawCall;

		this.update(dt);
		this._sceneManager.draw();
	}
}

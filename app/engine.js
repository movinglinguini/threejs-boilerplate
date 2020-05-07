import { SceneManager } from './scene-manager.js';

export class Engine {
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

		requestAnimationFrame(this._updateRoutine.bind(this));
	}

	addObject(obj) {
		this._sceneManager.addToScene(obj);
	}

	removeObject(obj) {
		this._sceneManager.addToScene(obj);
	}

	update(deltaTime) {}

	_updateRoutine() {
		const newDrawCall = new Date().getTime();
		const dt = newDrawCall - this._lastDrawCall;
		this._lastDrawCall = newDrawCall;

		this.update(dt);
		this._sceneManager.draw();
	}
}

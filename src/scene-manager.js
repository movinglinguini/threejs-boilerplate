import * as THREE from 'three/build/three.min.js';
import 'three/examples/js/controls/OrbitControls.js';

export class SceneManager extends Scene {
	get CAMERA() {
		return this._camera;
	}

	get RENDERER() {
		return this._renderer;
	}

	constructor(cameraProperties) {
		super();

		this._camera = new THREE.PerspectiveCamera(
			cameraProperties.fov,
			cameraProperties.aspect,
			cameraProperties.near,
			cameraProperties.far,
		);
		
		this._renderer = new THREE.WebGLRenderer();
		this._renderer.setPixelRatio(window.devicePixelRatio);

		this._orbitControls = new THREE.OrbitControls(this._camera, this._renderer.domElement);
	}

	addToScene(obj) {
		if (Array.isArray(obj)) {
			this.add(...obj);
			return;
		}

		this.add(obj);
	}

	removeFromScene(obj) {
		if (Array.isArray(obj3d)) {
			this.scene.remove(...obj3d);
			return;
		}
		
		this.scene.remove(obj3d);
	}

	draw() {
		this._renderer.render(this, this.camera);
	}
}

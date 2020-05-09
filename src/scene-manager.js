import * as THREE from 'three/build/three.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class SceneManager {
	get CAMERA() {
		return this._camera;
	}

	get RENDERER() {
		return this._renderer;
	}

	constructor(cameraProperties) {
		this._scene = new THREE.Scene();

		this._camera = new THREE.PerspectiveCamera(
			cameraProperties.fov,
			cameraProperties.aspect,
			cameraProperties.near,
			cameraProperties.far,
		);
		
		this._renderer = new THREE.WebGLRenderer();
		this._renderer.setPixelRatio(window.devicePixelRatio);

		this._orbitControls = new OrbitControls(this._camera, this._renderer.domElement);
	}

	addToScene(obj) {
		if (Array.isArray(obj)) {
			this._scene.add(...obj);
			return;
		}

		this._scene.add(obj);
	}

	removeFromScene(obj) {
		if (Array.isArray(obj)) {
			this._scene.remove(...obj);
			return;
		}
		
		this._scene.remove(obj);
	}

	draw() {
		this._renderer.render(this._scene, this._camera);
	}
}

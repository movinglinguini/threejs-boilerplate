import * as THREE from 'three/build/three.module';

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

		this._camera.position.set(0, 10, 10);
		
		this._renderer = new THREE.WebGLRenderer();
		this._renderer.setPixelRatio(window.devicePixelRatio);
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

	draw(rendererDimensions = { width: 250, height: 250 }) {
		this.resizeRenderer(rendererDimensions);
		this._renderer.render(this._scene, this._camera);
	}

	resizeRenderer(dimensions = { width: 250, height: 250 }) {
		const rendererDims = this._renderer.domElement.getBoundingClientRect();
		this._camera.aspect = rendererDims.width / rendererDims.height;
		this._camera.updateProjectionMatrix();
		this._renderer.setSize(dimensions.width, dimensions.height);
	}
}

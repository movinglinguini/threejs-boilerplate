import Engine from '../../build/threejs-boilerplate.min.js';
import * as THREE from '/node_modules/three/build/three.module.js';

describe('Engine', function () {
  const container = document.createElement('div');
  let engine = null;

  beforeEach(() => {
    document.body.append(container);
    engine = new Engine(container);
  });  

  it('should exist', () => {
    should.exist(engine);
  });

  it('should produce a renderer', function () {
    should.exist(container.contains(engine._container));
  });

  it('should take objects', () => {
    const obj = new THREE.Object3D();
    engine.addObject(obj);
    engine._sceneManager._scene.children.includes(obj).should.equal(true);
  });

  it('should remove objects', () => {
    const obj = new THREE.Object3D();
    engine.addObject(obj);
    engine.removeObject(obj);
    engine._sceneManager._scene.children.includes(obj).should.equal(false);
  });

  afterEach(() => {
    if (engine) {
      engine.destruct();
      engine = null;
    };

    document.body.removeChild(container);
    container.innerHTML = '';
  });
});

import Engine from './app/engine.js';
import * as THREE from 'three';

const grid = new THREE.GridHelper();
const engine = new Engine();

engine.addObject(grid);


import Engine from './app/engine.js';

const containerEl = document.createElement('div');
document.body.prepend(containerEl);

const engine = new Engine(containerEl);

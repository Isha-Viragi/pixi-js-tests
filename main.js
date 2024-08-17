import { Application, Assets, Sprite } from "pixi.js";

(async () => {
  const app = new Application();
  globalThis.__PIXI_APP__ = app;

  await app.init({
    resizeTo: window,
    backgroundColor: '#4a1850'
  });
  app.canvas.style.position = 'absolute';
  document.body.appendChild(app.canvas);

  const watch_300px = await Assets.load('images/watch-300px.png');
  const watch_600px = await Assets.load('images/watch-600px.png');

  const sprite_watch300 = Sprite.from(watch_300px);
  const sprite_watch600 = Sprite.from(watch_600px);

  app.stage.addChild(sprite_watch300);
  app.stage.addChild(sprite_watch600);

  sprite_watch300.position.set(30, 0)
  sprite_watch600.position.set(280, 0)

})();



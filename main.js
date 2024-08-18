import { Application, Assets, Sprite, Spritesheet, AnimatedSprite } from "pixi.js";

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
  const fly = await Assets.load('images/fly_spritesheet.png');

  const sprite_watch300 = Sprite.from(watch_300px);
  const sprite_watch600 = Sprite.from(watch_600px);
  const spritesheetFly = Sprite.from(fly)

  app.stage.addChild(sprite_watch300);
  app.stage.addChild(sprite_watch600);
  // app.stage.addChild(spritesheetFly);

  sprite_watch300.position.set(30, 0)
  sprite_watch600.position.set(280, 0)
  // spritesheetFly.position.set(300, 0)



  const spriteData = {
    frames: {
      fly1: {
        frame: { x: 0, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly2: {
        frame: { x: 107, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly3: {
        frame: { x: 214, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly4: {
        frame: { x: 321, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly5: {
        frame: { x: 428, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly6: {
        frame: { x: 535, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly7: {
        frame: { x: 642, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly8: {
        frame: { x: 749, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly9: {
        frame: { x: 856, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly10: {
        frame: { x: 963, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly11: {
        frame: { x: 1070, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly12: {
        frame: { x: 1177, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly13: {
        frame: { x: 1284, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly14: {
        frame: { x: 1391, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly15: {
        frame: { x: 1498, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly16: {
        frame: { x: 1605, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly17: {
        frame: { x: 1712, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly18: {
        frame: { x: 1819, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly19: {
        frame: { x: 1926, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },
      fly20: {
        frame: { x: 2033, y: 0, w: 107, h: 128 },
        sourceSize: { w: 107, h: 128 },
        spriteSourceSize: { x: 0, y: 0, w: 107, h: 128 }
      },

    },
    meta: {
      image: '/images/fly_spritesheet.png',
      size: { w: 2140, h: 128 }
    },
    animations: {
      fly: ['fly1', 'fly2', 'fly3', 'fly4', 'fly5', 'fly6', 'fly7', 'fly8', 'fly9', 'fly10', 'fly11', 'fly12', 'fly13', 'fly14', 'fly15', 'fly16', 'fly17', 'fly18', 'fly19', 'fly20',]
    }
  }

  const spriteTexture = await Assets.load(spriteData.meta.image);
  const spritesheet = new Spritesheet(
    spriteTexture,
    spriteData
  );

  await spritesheet.parse();

  const animatedFly = new AnimatedSprite(spritesheet.animations.fly);
  app.stage.addChild(animatedFly);

  animatedFly.animationSpeed = 0.24
  animatedFly.play();

})();



import React, { useRef, useEffect } from 'react';
import * as p5 from 'p5';

const ParticleComponent = () => {
    const canvasRef = useRef(null);
    const num = 7000;
    const noiseScale = 100;
    const noiseStrength = 1;
    let particles = [];

    const setup = (p) => {
        p.createCanvas(window.innerWidth, window.innerHeight).parent(canvasRef.current);
        p.noStroke();
        for (let i = 0; i < num; i++) {
            const loc = p.createVector(p.random(p.width * 1.2), p.random(p.height), 2);
            const angle = 0;
            const dir = p.createVector(p.cos(angle), p.sin(angle));
            const speed = p.random(0.2, 2);
            particles[i] = new Particle(p, loc, dir, speed);
        }
    };

    const draw = (p) => {
        p.fill(10, 10);
        p.noStroke();
        p.rect(0, 0, p.width, p.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].run();
        }
    };

    const Particle = class {
        constructor(p, loc, dir, speed) {
            this.p = p;
            this.loc = loc;
            this.dir = dir;
            this.speed = speed;
            this.z = 2;
        }

        run() {
            this.move();
            this.checkEdges();
            this.update();
        }

        move() {
            const angle = this.p.noise(
                this.loc.x / noiseScale,
                this.loc.y / noiseScale,
                this.p.frameCount / noiseScale
            ) * this.p.TWO_PI * noiseStrength;
            this.dir.x = this.p.cos(angle);
            this.dir.y = this.p.sin(angle);
            const vel = this.dir.copy();
            const d = 1;
            vel.mult(this.speed * d);
            this.loc.add(vel);
        }

        checkEdges() {
            if (
                this.loc.x < 0 ||
                this.loc.x > this.p.width ||
                this.loc.y < 0 ||
                this.loc.y > this.p.height
            ) {
                this.loc.x = this.p.random(this.p.width * 1.2);
                this.loc.y = this.p.random(this.p.height);
            }
        }

        update() {
            this.p.fill('#A580C0');
            this.p.ellipse(this.loc.x, this.loc.y, this.z);
        }
    };

    useEffect(() => {
        const p = new p5((p) => {
            p.setup = () => setup(p);
            p.draw = () => draw(p);
        });

        return () => {
            // Cleanup function
            p.remove();
        };
    }, []);

    return <div ref={canvasRef} />;
};

export default ParticleComponent;

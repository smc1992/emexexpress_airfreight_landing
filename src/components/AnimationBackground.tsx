"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Shape types for morphing animation
type ShapeType = 'airplane' | 'package' | 'truck' | 'globe' | 'logo';

// Configuration for animation
const CONFIG = {
  particleCount: 25000,
  shapeSize: 2.0,
  particleSize: 0.02,
  cameraDistance: 5,
  morphDuration: 10.0,    // Stark verlängert für sehr langsame Animation
  pauseDuration: 3.0,     // Längere Pause zwischen Formwechseln
  particleSpeed: 0.08,    // Stark reduzierte Geschwindigkeit
  colorCycle: false,      // Farbwechsel deaktiviert
  colorCycleSpeed: 0.5,   // (nicht mehr verwendet)
  starCount: 1500,
  backgroundColor: new THREE.Color(0x001E3C), // Dunkles Blau statt Schwarz
  particleColor1: new THREE.Color(0xFF6700), // EMEX Orange
  particleColor2: new THREE.Color(0xFFFFFF), // White (nicht mehr verwendet)
};

export default function AnimationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    console.log('AnimationBackground mounted');
    if (!canvasRef.current) {
      console.error('Canvas ref is null');
      return;
    }
    console.log('Canvas ref exists');
    
    // Shape Generators
    function generateAirplane(count: number, size: number): Float32Array {
      const points = new Float32Array(count * 3);
      const bodyLength = size * 1.5;
      const bodyWidth = size * 0.3;
      const bodyHeight = size * 0.3;
      const wingLength = size * 1.2;
      const wingWidth = size * 0.1;
      const tailHeight = size * 0.4;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const t = Math.random();
        
        if (t < 0.6) { // Main body (60%)
          points[i3] = (Math.random() - 0.5) * bodyWidth;
          points[i3 + 1] = (Math.random() - 0.5) * bodyHeight;
          points[i3 + 2] = (Math.random() - 0.5) * bodyLength;
        } else if (t < 0.9) { // Wings (30%)
          const side = Math.random() > 0.5 ? 1 : -1;
          points[i3] = side * (Math.random() * wingLength);
          points[i3 + 1] = (Math.random() - 0.5) * wingWidth;
          points[i3 + 2] = (Math.random() - 0.3) * bodyLength * 0.5;
        } else { // Tail (10%)
          points[i3] = (Math.random() - 0.5) * bodyWidth * 0.8;
          points[i3 + 1] = (Math.random() * tailHeight);
          points[i3 + 2] = -bodyLength * 0.4 + (Math.random() - 0.5) * bodyLength * 0.2;
        }
      }
      
      return points;
    }
    
    function generatePackage(count: number, size: number): Float32Array {
      const points = new Float32Array(count * 3);
      const boxSize = size * 0.8;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Create a box shape
        points[i3] = (Math.random() - 0.5) * boxSize;
        points[i3 + 1] = (Math.random() - 0.5) * boxSize;
        points[i3 + 2] = (Math.random() - 0.5) * boxSize;
      }
      
      return points;
    }
    
    function generateTruck(count: number, size: number): Float32Array {
      const points = new Float32Array(count * 3);
      const cabinSize = size * 0.5;
      const trailerLength = size * 1.5;
      const trailerWidth = size * 0.8;
      const trailerHeight = size * 0.8;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const t = Math.random();
        
        if (t < 0.3) { // Cabin (30%)
          points[i3] = -trailerLength * 0.5 - cabinSize * 0.5 + (Math.random() * cabinSize);
          points[i3 + 1] = (Math.random() - 0.3) * cabinSize;
          points[i3 + 2] = (Math.random() - 0.5) * trailerWidth * 0.7;
        } else { // Trailer (70%)
          points[i3] = (Math.random() - 0.5) * trailerLength;
          points[i3 + 1] = (Math.random() - 0.5) * trailerHeight;
          points[i3 + 2] = (Math.random() - 0.5) * trailerWidth;
        }
      }
      
      return points;
    }
    
    function generateGlobe(count: number, size: number): Float32Array {
      const points = new Float32Array(count * 3);
      const radius = size * 0.8;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Create points on a sphere surface
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        
        points[i3] = radius * Math.sin(phi) * Math.cos(theta);
        points[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        points[i3 + 2] = radius * Math.cos(phi);
      }
      
      return points;
    }
    
    function generateLogo(count: number, size: number): Float32Array {
      const points = new Float32Array(count * 3);
      const radius = size * 0.8;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const t = Math.random();
        const angle = Math.random() * Math.PI * 2;
        
        if (t < 0.7) { // Outer circle (70%)
          points[i3] = radius * Math.cos(angle);
          points[i3 + 1] = radius * Math.sin(angle);
          points[i3 + 2] = (Math.random() - 0.5) * size * 0.1;
        } else { // Inner E shape (30%)
          const eHeight = size * 0.6;
          const eWidth = size * 0.4;
          const barHeight = eHeight / 5;
          
          // Vertical bar of E
          points[i3] = -eWidth * 0.5 + (Math.random() * eWidth * 0.3);
          
          // Horizontal position for one of the three bars
          const barPosition = Math.floor(Math.random() * 3);
          if (barPosition === 0) {
            points[i3 + 1] = eHeight * 0.5 - barHeight * 0.5 - (Math.random() * barHeight);
          } else if (barPosition === 1) {
            points[i3 + 1] = (Math.random() * barHeight) - barHeight * 0.5;
          } else {
            points[i3 + 1] = -eHeight * 0.5 + barHeight * 0.5 + (Math.random() * barHeight);
          }
          
          points[i3 + 2] = (Math.random() - 0.5) * size * 0.1;
        }
      }
      
      return points;
    }
    
    // Setup Three.js
    const scene = new THREE.Scene();
    scene.background = CONFIG.backgroundColor;
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = CONFIG.cameraDistance;
    
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Define the shapes for morphing
    const SHAPES: ShapeType[] = ['airplane', 'package', 'truck', 'globe', 'logo'];
    
    // Create particles
    const particleCount = CONFIG.particleCount;
    const particlesGeometry = new THREE.BufferGeometry();
    
    // Generate initial shape (airplane)
    const initialPositions = generateAirplane(particleCount, CONFIG.shapeSize);
    const targetPositions = new Float32Array(particleCount * 3);
    
    // Set initial positions
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(initialPositions, 3));
    
    // Add a custom attribute for the target positions (for morphing)
    particlesGeometry.setAttribute('targetPosition', new THREE.BufferAttribute(targetPositions, 3));
    
    // Material with EMEX orange color
    const particlesMaterial = new THREE.PointsMaterial({
      size: CONFIG.particleSize,
      color: CONFIG.particleColor1,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    // Create particles mesh and add to scene
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Morphing state variables
    let currentShapeIndex = 0;
    let nextShapeIndex = 1;
    let morphProgress = 0;
    let morphing = false;
    let pauseTimer = 0;
    
    // Function to generate shape based on type
    const generateShape = (type: ShapeType, count: number, size: number): Float32Array => {
      switch (type) {
        case 'airplane': return generateAirplane(count, size);
        case 'package': return generatePackage(count, size);
        case 'truck': return generateTruck(count, size);
        case 'globe': return generateGlobe(count, size);
        case 'logo': return generateLogo(count, size);
        default: return generateGlobe(count, size);
      }
    };
    
    // Set next target shape
    const setNextShape = () => {
      const positions = particlesGeometry.getAttribute('position').array as Float32Array;
      const targetPositions = particlesGeometry.getAttribute('targetPosition').array as Float32Array;
      
      // Copy current positions to source
      for (let i = 0; i < positions.length; i++) {
        positions[i] = targetPositions[i];
      }
      
      particlesGeometry.getAttribute('position').needsUpdate = true;
      
      // Generate next shape
      const nextShape = generateShape(SHAPES[nextShapeIndex], particleCount, CONFIG.shapeSize);
      
      // Set as target
      for (let i = 0; i < nextShape.length; i++) {
        targetPositions[i] = nextShape[i];
      }
      
      particlesGeometry.getAttribute('targetPosition').needsUpdate = true;
      
      // Update indices
      currentShapeIndex = nextShapeIndex;
      nextShapeIndex = (nextShapeIndex + 1) % SHAPES.length;
      
      // Reset morphing state
      morphProgress = 0;
      morphing = true;
      pauseTimer = 0;
      
      console.log(`Morphing to: ${SHAPES[currentShapeIndex]}`);
    };
    
    // Initialize first morph target
    const firstTarget = generateShape(SHAPES[nextShapeIndex], particleCount, CONFIG.shapeSize);
    for (let i = 0; i < firstTarget.length; i++) {
      targetPositions[i] = firstTarget[i];
    }
    particlesGeometry.getAttribute('targetPosition').needsUpdate = true;
    
    // Animation loop
    let lastTime = Date.now() / 1000;
    
    const animate = () => {
      const currentTime = Date.now() / 1000;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      // Rotate particles
      particlesMesh.rotation.y += 0.002;
      particlesMesh.rotation.x += 0.001;
      
      // Handle morphing
      if (morphing) {
        morphProgress += CONFIG.particleSpeed / CONFIG.morphDuration;
        
        if (morphProgress >= 1.0) {
          morphProgress = 1.0;
          morphing = false;
        }
        
        // Interpolate between current and target positions
        const positions = particlesGeometry.getAttribute('position').array as Float32Array;
        const targetPositions = particlesGeometry.getAttribute('targetPosition').array as Float32Array;
        
        for (let i = 0; i < positions.length; i++) {
          positions[i] = positions[i] + (targetPositions[i] - positions[i]) * morphProgress * 0.1;
        }
        
        particlesGeometry.getAttribute('position').needsUpdate = true;
      } else {
        // Pause between morphs
        pauseTimer += CONFIG.particleSpeed / CONFIG.pauseDuration;
        
        if (pauseTimer >= 1.0) {
          setNextShape();
        }
      }
      
      // Color cycling
      if (CONFIG.colorCycle) {
        const time = Date.now() * 0.001 * CONFIG.colorCycleSpeed;
        const r = Math.sin(time) * 0.5 + 0.5;
        const g = Math.sin(time + 2) * 0.25 + 0.25;
        const b = Math.sin(time + 4) * 0.125 + 0.125;
        
        particlesMaterial.color.setRGB(
          r * CONFIG.particleColor1.r + (1 - r) * CONFIG.particleColor2.r,
          g * CONFIG.particleColor1.g + (1 - g) * CONFIG.particleColor2.g,
          b * CONFIG.particleColor1.b + (1 - b) * CONFIG.particleColor2.b
        );
      }
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Start morphing after a short delay
    setTimeout(() => {
      setNextShape();
    }, 500);
    
    // Cleanup
    return () => {
      console.log('Cleaning up animation');
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        opacity: 1
      }}
    />
  );
}

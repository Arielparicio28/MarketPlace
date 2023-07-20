import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
 import './cube.css'

const Cube = () => {
  const sceneRef = useRef();

  useEffect(() => {
    // Creamos la escena, cámara y renderizador de Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true });

 
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Creamos un cubo y lo añadimos a la escena
    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2, 3, 3, 3);
    const material = new THREE.MeshLambertMaterial({
      color: 0x0000FF,
      
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Añadimos una luz para que el cubo sea visible
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1).normalize();

    scene.add(ambientLight);
    scene.add(directionalLight);

    // Ajustamos la posición de la cámara para ver el cubo
    camera.position.z = 5;

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotamos el cubo en cada frame
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Limpiamos el renderizador cuando el componente se desmonta
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default Cube;

const fs = require('fs');

const file = 'C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\products\\\\page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Add import if missing
if (!content.includes("import Script from 'next/script'")) {
    content = content.replace("import React, { useEffect } from 'react';", "import React, { useEffect } from 'react';\nimport Script from 'next/script';");
}

const threeJsCode = `
{/* Three.js Implementation Script */}
<div className="fixed inset-0 w-full h-full bg-transparent pointer-events-none z-[-1]" style={{display: 'block'}}>
    <div id="threejs-container-ANIMATION_21" style={{width: '100%', height: '100%'}}></div>
    
    <Script src="https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js" strategy="afterInteractive" onLoad={() => {
        const THREE = (window as any).THREE;
        if (!THREE) return;
        
        const container = document.getElementById('threejs-container-ANIMATION_21');
        if (!container) return;
        if (container.children.length > 0) return;

        const devicePixelRatio = window.devicePixelRatio || 1;
        const scene = new THREE.Scene();
        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(devicePixelRatio);
        container.appendChild(renderer.domElement);

        const bodyMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x172a45, 
            specular: 0x444444, 
            shininess: 30,
            transparent: true,
            opacity: 0.9
        });
        const detailMaterial = new THREE.MeshPhongMaterial({ color: 0xf59e0b });
        const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xccdbf4, wireframe: true, transparent: true, opacity: 0.2 });

        const valveGroup = new THREE.Group();

        const bodyGeom = new THREE.CylinderGeometry(1.5, 1.5, 4, 32);
        const body = new THREE.Mesh(bodyGeom, bodyMaterial);
        body.rotation.z = Math.PI / 2;
        valveGroup.add(body);

        const flangeGeom = new THREE.CylinderGeometry(2.2, 2.2, 0.5, 32);
        const flange1 = new THREE.Mesh(flangeGeom, bodyMaterial);
        flange1.position.x = -2;
        flange1.rotation.z = Math.PI / 2;
        valveGroup.add(flange1);

        const flange2 = new THREE.Mesh(flangeGeom, bodyMaterial);
        flange2.position.x = 2;
        flange2.rotation.z = Math.PI / 2;
        valveGroup.add(flange2);

        const bonnetGeom = new THREE.CylinderGeometry(1, 1.5, 2, 32);
        const bonnet = new THREE.Mesh(bonnetGeom, bodyMaterial);
        bonnet.position.y = 2;
        valveGroup.add(bonnet);

        const stemGeom = new THREE.CylinderGeometry(0.3, 0.3, 3, 16);
        const stem = new THREE.Mesh(stemGeom, detailMaterial);
        stem.position.y = 3.5;
        valveGroup.add(stem);

        const wheelGeom = new THREE.TorusGeometry(1.2, 0.2, 16, 100);
        const wheel = new THREE.Mesh(wheelGeom, detailMaterial);
        wheel.position.y = 5;
        wheel.rotation.x = Math.PI / 2;
        valveGroup.add(wheel);

        const wireframeMesh = new THREE.Mesh(bodyGeom, wireframeMaterial);
        wireframeMesh.rotation.z = Math.PI / 2;
        wireframeMesh.scale.set(1.01, 1.01, 1.01);
        valveGroup.add(wireframeMesh);

        scene.add(valveGroup);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7);
        scene.add(directionalLight);

        camera.position.z = 10;

        // Position the group so it appears nice as a background element
        valveGroup.position.set(4, -1, -2);
        valveGroup.scale.set(0.6, 0.6, 0.6);

        let isDragging = false;
        let previousMouseX = 0;
        let previousMouseY = 0;

        window.addEventListener('mousedown', (e) => { isDragging = true; });
        window.addEventListener('mouseup', () => { isDragging = false; });
        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - previousMouseX;
                const deltaY = e.clientY - previousMouseY;
                valveGroup.rotation.y += deltaX * 0.01;
                valveGroup.rotation.x += deltaY * 0.01;
            }
            previousMouseX = e.clientX;
            previousMouseY = e.clientY;
        });

        function animate() {
            requestAnimationFrame(animate);
            if (!isDragging) {
                valveGroup.rotation.y += 0.005;
                const scrollY = window.scrollY;
                valveGroup.rotation.x = scrollY * 0.001;
            }
            renderer.render(scene, camera);
        }

        animate();

        window.addEventListener('resize', () => {
            const w = container.clientWidth || window.innerWidth;
            const h = container.clientHeight || window.innerHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        });
    }} />
</div>
{/* STITCH_THREEJS_END:ANIMATION_21 */}
`;

// Replace the old implementation
const oldImplRegex = /\{\/\*\s*Three\.js Implementation Script\s*\*\/\}[\s\S]*?\{\/\*\s*STITCH_THREEJS_END:ANIMATION_21\s*\*\/\}/;
content = content.replace(oldImplRegex, threeJsCode);

fs.writeFileSync(file, content);
console.log('ThreeJS added!');

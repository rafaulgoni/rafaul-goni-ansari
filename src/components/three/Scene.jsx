import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

function ParticleField({ reducedMotion }) {
  const group = useRef()
  const count = 110
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const radius = 2.8 + Math.random() * 4.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      array[i * 3 + 1] = radius * Math.cos(phi)
      array[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
    }
    return array
  }, [])

  useFrame((state, delta) => {
    if (!group.current || reducedMotion) return
    group.current.rotation.y += delta * 0.035
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08
  })

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.018} sizeAttenuation transparent opacity={0.5} depthWrite={false} />
      </points>
    </group>
  )
}

function Orbitals({ reducedMotion }) {
  const root = useRef()
  const rings = useMemo(() => [
    { scale: [2.8, 0.34, 2.8], rotation: [0.9, 0.2, 0.2], speed: 0.18 },
    { scale: [2.1, 0.24, 2.1], rotation: [0.15, 1.05, 0.5], speed: -0.12 }
  ], [])

  useFrame((state) => {
    if (!root.current || reducedMotion) return
    root.current.rotation.z = state.clock.elapsedTime * 0.03
  })

  return (
    <group ref={root}>
      {rings.map((ring, index) => (
        <mesh key={index} rotation={ring.rotation} scale={ring.scale}>
          <torusGeometry args={[1, 0.0035, 8, 160]} />
          <meshBasicMaterial transparent opacity={0.18} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[1.55, 28, 28]} />
        <meshBasicMaterial transparent opacity={0.018} wireframe />
      </mesh>
    </group>
  )
}

function SceneContent({ reducedMotion }) {
  const root = useRef()
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onPointerMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  useFrame((_, delta) => {
    if (!root.current || reducedMotion) return
    root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, pointer.current.x * 0.05, 3, delta)
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, pointer.current.y * -0.04, 3, delta)
  })

  return (
    <group ref={root}>
      <ParticleField reducedMotion={reducedMotion} />
      <Orbitals reducedMotion={reducedMotion} />
    </group>
  )
}

export default function Scene({ reducedMotion = false }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 44 }}
      dpr={[1, 1.35]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="absolute inset-0"
      aria-hidden="true"
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[2, 2, 5]} intensity={1.5} distance={10} />
      <SceneContent reducedMotion={reducedMotion} />
    </Canvas>
  )
}

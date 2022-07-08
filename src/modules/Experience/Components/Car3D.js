import React, { forwardRef, useRef } from "react"
import { useFrame } from "react-three-fiber"

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useGLTF } from '@react-three/drei'

export default function Car3D(props) {
  const group = useRef()
  const gltf = useGLTF('./Car3D/scene.gltf')

  return (<primitive object={gltf.scene} />)
}

useGLTF.preload('/scene.gltf')

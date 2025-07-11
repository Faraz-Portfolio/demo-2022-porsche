import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Color } from "three";

export default function Car(props) {
  const { nodes, materials } = useGLTF(
    "/demo-2022-porsche/porsche-transformed-v2.glb"
  );

  useEffect(() => {
    materials.paint.color = new Color("#ff9700").convertLinearToSRGB();
    materials.paint.metalness = 0.2;
    materials.paint.roughness = 0.05;
    materials.paint.clearcoat = 1;
    materials.paint.aoMapIntensity = 2.2;
    materials.paint.roughnessMapIntensity = 2;
    materials["930_chromes"].metalness = 1;
    materials["930_chromes"].roughness = 0.3;
    materials["930_chromes"].color = new Color("white").convertLinearToSRGB();
    materials["glass"].color = new Color("white").convertLinearToSRGB();
    materials["glass"].opacity = 0.5;
    materials["930_plastics"].roughness = 0.8;
    materials["930_lights"].emissiveMap = materials["930_lights"].map;
    materials["930_lights"].emissiveIntensity = 50;
    materials["930_tire"].color.set("black");
    materials["930_tire"].roughness = 0.7;
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.81}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_113.geometry}
            material={nodes.Object_113.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={nodes.Object_30.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={nodes.Object_28.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_128.geometry}
            material={nodes.Object_128.material}
          />
          <group position={[0, 0.89, 4.01]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_130.geometry}
              material={nodes.Object_130.material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={nodes.Object_24.material}
          />
          <group position={[0, 0.69, -2.1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_124.geometry}
              material={nodes.Object_124.material}
            />
          </group>
          <group position={[0, 0.9, -3.5]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_132.geometry}
              material={nodes.Object_132.material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_111.geometry}
            material={nodes.Object_111.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_109.geometry}
            material={nodes.Object_109.material}
          />
          <group position={[1.8, 0.14, 3.2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_134.geometry}
              material={nodes.Object_134.material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={nodes.Object_26.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_136.geometry}
            material={nodes.Object_136.material}
          />
          <group position={[-1.8, 0.14, 3.2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_126.geometry}
              material={nodes.Object_126.material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={nodes.Object_36.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_107.geometry}
            material={nodes.Object_107.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_91.geometry}
            material={nodes.Object_91.material}
          />
          <group position={[0, 0.69, -2.1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={nodes.Object_22.material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_105.geometry}
            material={nodes.Object_105.material}
            material-roughness={1}
            material-metalness={0.5}
            scale={1.0025}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_103.geometry}
            material={nodes.Object_103.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_101.geometry}
            material={nodes.Object_101.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_99.geometry}
            material={nodes.Object_99.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_97.geometry}
            material={nodes.Object_97.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_95.geometry}
            material={materials["930_lights_refraction"]}
          />
          <group position={[-1.02, 0.56, 1.97]} rotation={[0.5, -0.29, 0.15]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={nodes.Object_11.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={nodes.Object_12.material}
            />
          </group>
          <group position={[-1.16, 0.56, -1.21]} rotation={[0.48, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={nodes.Object_8.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={nodes.Object_9.material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={nodes.Object_82.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={nodes.Object_47.material}
          />
          <group position={[1.02, 0.56, 1.97]} rotation={[0.52, -0.28, 0.16]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_120.geometry}
              material={nodes.Object_120.material}
            />
          </group>
          <group
            position={[1.16, 0.56, -1.21]}
            rotation={[0.48, 0, 0]}
            scale={[0.89, 0.94, 0.94]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_118.geometry}
              material={nodes.Object_118.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_117.geometry}
              material={nodes.Object_117.material}
            />
          </group>
          <group position={[1.02, 0.56, 1.97]} rotation={[0.52, -0.28, 0.16]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_88.geometry}
              material={nodes.Object_88.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_89.geometry}
              material={nodes.Object_89.material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={nodes.Object_53.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={nodes.Object_51.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={nodes.Object_38.material}
          />
          <group
            position={[0.7, 0.51, -2.53]}
            rotation={[0.04, -0.21, 0.01]}
            scale={[0.24, 0.24, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={nodes.Object_20.material}
            />
          </group>
          <group position={[0.01, 1.67, 0.65]} scale={0.06}>
            <mesh
              scale={0.96}
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={nodes.Object_55.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={nodes.Object_56.material}
            />
          </group>
          <group
            position={[1.08, 1.21, 0.93]}
            rotation={[0, 0, -0.06]}
            scale={[0.93, 0.93, 0.93]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_115.geometry}
              material={nodes.Object_115.material}
            />
          </group>
          <group
            position={[0.66, 0.48, 3.11]}
            rotation={[0.16, 0.1, -0.02]}
            scale={[0.91, 0.91, 0.91]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={nodes.Object_45.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_44.geometry}
              material={nodes.Object_44.material}
            />
          </group>
          <group
            position={[0.7, 0.51, -2.53]}
            rotation={[0.04, -0.21, 0.01]}
            scale={[0.24, 0.24, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_42.geometry}
              material={nodes.Object_42.material}
            />
          </group>
          <group
            position={[0.7, 0.51, -2.53]}
            rotation={[0.04, -0.21, 0.01]}
            scale={[0.24, 0.24, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_40.geometry}
              material={nodes.Object_40.material}
            />
          </group>
          <group position={[0.01, 1.67, 0.65]} scale={0.06}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_66.geometry}
              material={nodes.Object_66.material}
            />
          </group>
          <group
            position={[0.25, 1.33, 1.33]}
            rotation={[0.62, 0.44, -0.1]}
            scale={[0.01, 0.01, 0.01]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_34.geometry}
              material={nodes.Object_34.material}
            />
          </group>
          <group
            position={[0.32, 1.39, -1.83]}
            rotation={[-0.51, -0.83, -0.19]}
            scale={[0.01, 0.01, 0.01]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_76.geometry}
              material={nodes.Object_76.material}
            />
          </group>
          <group
            position={[-0.25, 1.33, 1.32]}
            rotation={[0.58, 0.32, -0.01]}
            scale={[0.01, 0.01, 0.01]}
          >
            <group
              position={[37.47, -1.97, 0.92]}
              rotation={[-2.95, -1.38, -2.99]}
              scale={[14.49, 9.23, 13.31]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_70.geometry}
                material={nodes.Object_70.material}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_68.geometry}
              material={nodes.Object_68.material}
            />
          </group>
          <group
            position={[-1.01, 1.26, 1.5]}
            rotation={[0.05, 0, 0.05]}
            scale={[0.01, 0.01, 0.01]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_49.geometry}
              material={nodes.Object_49.material}
            />
          </group>
          <group
            position={[0.79, 0.49, -2.38]}
            rotation={[-1.77, -0.01, -0.46]}
            scale={[6.31, 6.31, 6.31]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_59.geometry}
              material={nodes.Object_59.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={nodes.Object_58.material}
            />
          </group>
          <group
            position={[0.67, 1.36, 1.11]}
            rotation={[0.07, -1.09, -0.48]}
            scale={[0.2, 0.13, 0.18]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_74.geometry}
              material={nodes.Object_74.material}
            />
          </group>
          <group
            position={[0.63, 1.55, -1.29]}
            rotation={[-0.35, 0.04, -0.1]}
            scale={[0.2, 0.13, 0.19]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_72.geometry}
              material={nodes.Object_72.material}
            />
          </group>
          <group position={[0, 0.68, -2.62]} scale={[1, 0.96, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_78.geometry}
              material={nodes.Object_78.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_80.geometry}
              material={nodes.Object_80.material}
            />
          </group>
          <group
            position={[0, 1.05, 1.38]}
            rotation={[0, -0.05, 0.15]}
            scale={[0.72, 0.82, 0.82]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_86.geometry}
              material={nodes.Object_86.material}
            />
          </group>
          <group rotation={[0, -0.05, 0.15]} scale={[0.72, 0.82, 0.82]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_84.geometry}
              material={nodes.Object_84.material}
            />
          </group>
          <group
            position={[0, 0.87, 2.92]}
            rotation={[0.46, 0, 0]}
            scale={[0.03, 0.03, 0.03]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_63.geometry}
              material={nodes.Object_63.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_64.geometry}
              material={nodes.Object_64.material}
            />
          </group>
          <group
            position={[0, 0.98, -2.49]}
            rotation={[2.32, 0, -Math.PI]}
            scale={0.02}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_61.geometry}
              material={nodes.Object_61.material}
              position={[0, 0.08, 0.03]}
            />
          </group>
          <group
            position={[0, 0.47, 3.12]}
            rotation={[-2.83, 0, Math.PI]}
            scale={[1, 0.96, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={nodes.Object_4.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={nodes.Object_5.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={nodes.Object_6.material}
              material-roughness={1}
              material-envMapIntensity={2}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_93.geometry}
            material={nodes.Object_93.material}
          />
        </group>
      </group>
    </group>
  );
}

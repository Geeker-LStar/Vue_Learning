<script setup>
import Pages from '../components/pages.vue'
import {ref} from 'vue'


const title = ref('AIBA - About')
document.title = title.value
</script>

<template>
    <Pages>
        <template v-slot:title>About</template>
        <!-- <template v-slot:title_box="{ title_box_class, title_box_style }"></template> -->
        <template v-slot:content="{ h1_class, h2_class, h3_class, p_class }">
            <p :class="p_class">In this page, we have...</p>
            <h1 :class="h1_class">Abstract</h1>
            <p :class="p_class">Our team utilized molecular docking technology to screen drugs from a drug library and validated the scientific accuracy of the wet lab screening results. At the same time, we integrated virtual screening with wet lab screening, conducting further analysis on the drugs that performed well. We ultimately proposed structural modifications for the drugs. The modified drugs achieved higher scores in molecular docking.
            On this page, we will introduce the virtual screening (molecular docking) technique in detail and present the corresponding mathematical model. We will also describe the process and results of our computer simulation using this technique and illustrate the significance of our study.
            LET'S GET START!!</p>
            <h1 :class="h1_class">Introduction to Virtual Screening and Molecular Docking</h1>
            <p :class="p_class">Drug virtual screening is a computational method used to identify potential drug candidates from large libraries of compounds. It involves simulating how small molecules, or ligands, interact with a biological target, such as a protein or enzyme, to predict their binding affinity and potential efficacy. The process typically begins with a target structure, often derived from experimental data or computational models. Virtual screening methods, including molecular docking, molecular dynamics simulations, and quantitative structure-activity relationship (QSAR) models, are employed to evaluate and rank compounds based on their predicted interactions with the target.
            By using virtual screening, researchers can efficiently narrow down a vast number of compounds to those most likely to have therapeutic potential, thus accelerating the drug discovery process and reducing the need for extensive experimental testing. This approach facilitates the identification of promising candidates for further experimental validation and optimization.
            Molecular docking, a key technique within this broader virtual screening framework, forecasts noncovalent interactions between macromolecules—typically between a macromolecule (receptor) and a smaller molecule (ligand). This process begins with their unbound forms, often derived from molecular dynamics simulations, homology modeling, or other methods, with the goal of determining bound conformations and estimating binding affinity.
            The ability to predict how small molecules bind to proteins is especially valuable in drug discovery. It helps in screening virtual libraries of drug-like compounds to identify potential leads for development. Moreover, docking can estimate the bound conformations of known binders when experimental holo structures are not available. Integrating these approaches not only streamlines the identification of promising drug candidates but also enhances our understanding of their binding mechanisms and potential for structural optimization.
            Furthermore, molecular docking provides valuable insights into potential modifications of drug candidates. By analyzing the predicted binding modes and interactions of ligands with the target, researchers can pinpoint regions where structural changes might improve binding affinity or selectivity. For example, docking results can indicate how altering certain chemical groups on a ligand could enhance its fit with the target’s binding site or minimize unwanted interactions. This information is crucial for guiding the design of optimized drug candidates with improved efficacy and fewer side effects.
            </p>
        </template>
        <template v-slot:side_bar="{ h1_class, h2_class, h3_class, p_class }">
            <h3 :class="h3_class">On this page:</h3>
            <p :class="p_class">Introduction about AIBA!</p>
        </template>
    </Pages>
</template>
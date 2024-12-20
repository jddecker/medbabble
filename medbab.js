const actions = Array(
    "regenerate",
    "transfuse",
    "stimulate",
    "bypass",
    "resequence",
    "purge",
    "recombine",
    "replicate",
    "reconstruct",
    "flood",
    "replace",
    "stabilize",
    "strenghten",
    "decontaminate",
    "modify",
    "reset",
    "merge",
    "separate",
    "reactivate",
    "deactivate"
);
const descriptors = Array(
    "damaged",
    "degenerated",
    "devolved",
    "mutated",
    "exogeneous",
    "redundant",
    "pathogenic",
    "incompatible",
    "primary",
    "secondary",
    "alpha-type",
    "beta-type",
    "gamma-type",
    "nano",
    "medial",
    "central",
    "ventral",
    "dorsal",
    "lateral",
    "unstable"
);
const bodySystems = Array(
    "cells ",
    "pathways",
    "vessels",
    "muscles",
    "bone structure",
    "memory engrams",
    "nucleotides",
    "base pairs",
    "bioelectric energy",
    "chromosomes",
    "dermal tissue",
    "antibodies",
    "synaptic potentials",
    "lymphocytes",
    "brain waves",
    "enzymes",
    "microflora",
    "nerves",
    "glands",
    "neurons"
);
let action = actions[Math.floor(Math.random()*actions.length)];
let descriptor = descriptors[Math.floor(Math.random()*descriptors.length)];
let bodySystem = bodySystems[Math.floor(Math.random()*bodySystems.length)];
document.getElementById("action").innerHTML = action;
document.getElementById("descriptor").innerHTML = descriptor;
document.getElementById("bodySystem").innerHTML = bodySystem;

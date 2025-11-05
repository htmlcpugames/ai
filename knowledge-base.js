// Extended 3D Printing Knowledge Base
const extendedKnowledgeBase = {
    // Comprehensive material database
    materials: {
        PLA: {
            nozzleTemp: [190, 220],
            bedTemp: [50, 60],
            properties: "Easy to print, biodegradable, low warping, good surface finish",
            uses: "Prototypes, decorative items, beginner projects",
            tips: "No heated bed required, good first layer adhesion, minimal warping",
            difficulty: "Beginner",
            strength: "Low-Medium",
            flexibility: "Brittle",
            heatResistance: "Low (60°C)",
            chemicalResistance: "Poor",
            postProcessing: "Easy sanding, painting"
        },
        ABS: {
            nozzleTemp: [230, 250],
            bedTemp: [90, 110],
            properties: "Strong, heat resistant, flexible, prone to warping",
            uses: "Functional parts, automotive, electronics housings",
            tips: "Requires heated bed and enclosure, good ventilation needed",
            difficulty: "Intermediate",
            strength: "High",
            flexibility: "Good",
            heatResistance: "High (100°C)",
            chemicalResistance: "Good",
            postProcessing: "Acetone smoothing, drilling, tapping"
        },
        PETG: {
            nozzleTemp: [230, 250],
            bedTemp: [70, 90],
            properties: "Strong, chemical resistant, clear, easy to print",
            uses: "Food containers, mechanical parts, transparent items",
            tips: "Combines PLA ease with ABS strength, minimal warping",
            difficulty: "Beginner-Intermediate",
            strength: "High",
            flexibility: "Good",
            heatResistance: "Medium (80°C)",
            chemicalResistance: "Excellent",
            postProcessing: "Easy machining, chemical welding"
        },
        TPU: {
            nozzleTemp: [210, 230],
            bedTemp: [40, 60],
            properties: "Flexible, rubber-like, impact resistant",
            uses: "Phone cases, gaskets, flexible joints",
            tips: "Print slowly, reduce retraction, direct drive extruder preferred",
            difficulty: "Advanced",
            strength: "Medium",
            flexibility: "Excellent",
            heatResistance: "Medium (70°C)",
            chemicalResistance: "Good",
            postProcessing: "Difficult to sand, can be dyed"
        }
    },

    // Common print failures with detailed solutions
    troubleshooting: {
        "first layer adhesion": {
            symptoms: ["First layer not sticking", "Corners lifting", "Print moving during printing"],
            causes: [
                "Bed not level",
                "Nozzle too far from bed",
                "Bed temperature too low",
                "Dirty print surface",
                "Wrong Z-offset"
            ],
            solutions: [
                "Level bed using paper method or auto-leveling",
                "Adjust Z-offset to get proper squish",
                "Increase bed temperature by 5-10°C",
                "Clean bed with isopropyl alcohol",
                "Use adhesion aids (hairspray, glue stick, PEI sheet)",
                "Slow down first layer speed to 15-25mm/s"
            ],
            prevention: [
                "Regular bed leveling maintenance",
                "Keep print surface clean",
                "Use proper bed temperature for material"
            ]
        },
        
        "warping": {
            symptoms: ["Corners lifting up", "Part detaching from bed", "Curved bottom surface"],
            causes: [
                "Rapid cooling causing shrinkage",
                "No heated bed",
                "Poor bed adhesion",
                "Large flat surfaces",
                "Drafts or temperature variations"
            ],
            solutions: [
                "Use heated bed at proper temperature",
                "Add brim or raft for better adhesion",
                "Reduce cooling fan speed for first layers",
                "Use enclosure to maintain temperature",
                "Apply adhesion aids",
                "Reduce infill percentage"
            ],
            prevention: [
                "Design with rounded corners",
                "Avoid large flat surfaces",
                "Use proper bed adhesion methods"
            ]
        },

        "stringing": {
            symptoms: ["Thin plastic strings between parts", "Cobweb-like artifacts", "Messy travel moves"],
            causes: [
                "Temperature too high",
                "Retraction distance too low",
                "Retraction speed too slow",
                "Travel speed too slow",
                "Wet filament"
            ],
            solutions: [
                "Lower nozzle temperature by 5-10°C",
                "Increase retraction distance (3-6mm for Bowden, 1-3mm for direct drive)",
                "Increase retraction speed (25-45mm/s)",
                "Increase travel speed (120-200mm/s)",
                "Enable 'Avoid crossing perimeters'",
                "Dry filament if moisture suspected"
            ],
            prevention: [
                "Store filament properly",
                "Use temperature towers to find optimal temp",
                "Regular retraction calibration"
            ]
        },

        "layer adhesion": {
            symptoms: ["Layers separating", "Weak parts", "Delamination", "Poor layer bonding"],
            causes: [
                "Nozzle temperature too low",
                "Cooling fan too aggressive",
                "Print speed too fast",
                "Under-extrusion",
                "Inconsistent extrusion temperature"
            ],
            solutions: [
                "Increase nozzle temperature by 5-10°C",
                "Reduce cooling fan speed or delay activation",
                "Reduce print speed by 10-20mm/s",
                "Check and calibrate extruder steps",
                "Ensure consistent filament diameter",
                "Check for partial nozzle clogs"
            ],
            prevention: [
                "Regular nozzle maintenance",
                "Proper temperature calibration",
                "Quality filament storage"
            ]
        }
    },

    // Calibration procedures
    calibration: {
        "bed leveling": {
            steps: [
                "Heat bed to printing temperature",
                "Home all axes",
                "Disable stepper motors",
                "Place paper between nozzle and bed",
                "Adjust bed screws until paper has slight drag",
                "Check all four corners and center",
                "Repeat until consistent across bed"
            ],
            tools: ["Paper (0.1mm thickness)", "Allen keys for bed screws"],
            frequency: "Before every print or weekly"
        },
        
        "extruder steps": {
            steps: [
                "Mark filament 120mm from extruder",
                "Heat nozzle to printing temperature",
                "Extrude 100mm of filament",
                "Measure remaining distance to mark",
                "Calculate: New steps = (Old steps × 100) ÷ Actual extruded",
                "Update firmware with new E-steps value",
                "Test with another 100mm extrusion"
            ],
            tools: ["Ruler", "Marker", "Firmware access"],
            frequency: "Once per extruder setup or filament change"
        }
    },

    // Print settings optimization
    settings: {
        quality: {
            layerHeight: 0.1,
            printSpeed: 30,
            infill: 20,
            wallThickness: 1.2,
            topBottomLayers: 6
        },
        standard: {
            layerHeight: 0.2,
            printSpeed: 50,
            infill: 20,
            wallThickness: 0.8,
            topBottomLayers: 4
        },
        fast: {
            layerHeight: 0.3,
            printSpeed: 80,
            infill: 15,
            wallThickness: 0.8,
            topBottomLayers: 3
        }
    }
};

// Advanced troubleshooting patterns
const troubleshootingPatterns = {
    imageAnalysis: {
        "layer separation": {
            keywords: ["gap", "split", "separate", "delamination"],
            diagnosis: "Poor layer adhesion - increase temperature or reduce cooling"
        },
        "stringing": {
            keywords: ["string", "web", "hair", "thread"],
            diagnosis: "Retraction issues - adjust retraction settings or lower temperature"
        },
        "warping": {
            keywords: ["curl", "lift", "warp", "bend"],
            diagnosis: "Thermal stress - use heated bed, brim, or enclosure"
        },
        "under extrusion": {
            keywords: ["thin", "gap", "missing", "weak"],
            diagnosis: "Insufficient material flow - check nozzle, increase temperature, or calibrate extruder"
        }
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { extendedKnowledgeBase, troubleshootingPatterns };
}

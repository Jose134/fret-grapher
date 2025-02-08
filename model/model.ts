enum StylingShape {
    RECTANGLE = 0,
    CIRCLE = 1,
    TRIANGLE = 2,
    DIAMOND = 3
}

interface Styling {
    shape: StylingShape;
    size: number;
    fillColor: string;
    borderEnabled: boolean;
    borderColor: string;
    borderWidth: number;
}

interface StylingCollection {
    root: Styling;
    flatSecond: Styling;
    second: Styling;
    minorThird: Styling;
    majorThird: Styling;
    fourth: Styling;
    flatFifth: Styling;
    fifth: Styling;
    minorSixth: Styling;
    majorSixth: Styling;
    minorSeventh: Styling;
    majorSeventh: Styling;
}

enum Note {
    C = 0,
    C_SHARP = 1,
    D = 2,
    D_SHARP = 3,
    E = 4,
    F = 5,
    F_SHARP = 6,
    G = 7,
    G_SHARP = 8,
    A = 9,
    A_SHARP = 10,
    B = 11
}

enum GraphStylingType {
    AUTOMATIC = 0,
    CUSTOM = 1
}

interface FretSymbol {
    fret: number;
    string: number;
    customStyling: Styling;
}

interface Graph {
    id: string;
    name: string;
    startingFret: number;
    endingFret: number;
    rootNote: Note;
    stylingType: GraphStylingType;
    autoStyling: StylingCollection;
    symbols: FretSymbol[]; 
}

enum FretMarkerStyle {
    NONE = 0,
    DOT = 1,
    DOUBLE_DOT = 2,
    TRIANGLE = 3,
    SQUARE = 4,
    DIAMOND = 5
}

interface ProjectConfig {
    stringCount: number;
    fretCount: number;
    fretMarkersStyle: FretMarkerStyle;
}

interface Project {
    id: string;
    name: string;
    author: string;
    config: ProjectConfig;
    graphs: Graph[];
    defaultStyling: StylingCollection;
}

export {
    StylingShape,
    Note,
    GraphStylingType,
    FretMarkerStyle
}

export type {
    Styling,
    StylingCollection,
    FretSymbol,
    Graph,
    ProjectConfig,
    Project
}

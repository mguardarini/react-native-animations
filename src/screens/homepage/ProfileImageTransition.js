
const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

const HEADER_HEIGHT_INPUT_RANGE =  [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT];
const HEADER_HEIGHT_OUTPUT_RANGE = [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT];

const PROFILE_IMAGE_HEIGHT_INPUT_RANGE = [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT];
const PROFILE_IMAGE_HEIGHT_OUTPUT_RANGE =  [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT];

const PROFILE_IMAGE_MARGIN_TOP_INPUT_RANGE = [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT];
const PROFILE_IMAGE_MARGIN_TOP_OUTPUT_RANGE = [
    HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
    HEADER_MAX_HEIGHT + 5
];

const HEADERZ_INDEX_INPUT_RANGE = [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120];
const HEADERZ_INDEX_OUTPUT_RANGE = [0, 0, 1000];

const HEADER_TITLE_BOTTOM_INPUT_RANGE =  [
    0,
    HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
    HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
    HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26
];
const HEADER_TITLE_BOTTOM_OUTPUT_RANGE =  [-20, -20, -20, 0];

function ScrollYInterpolate(state, input, output) {
   return state.interpolate({
      inputRange: input,
      outputRange: output,
      extrapolate: 'clamp'
    });
}   

function GenerateHeaderHeight(state){
   return ScrollYInterpolate(state,HEADER_HEIGHT_INPUT_RANGE,HEADER_HEIGHT_OUTPUT_RANGE);
}
function GenerateProfileImageHeight(state){
   return ScrollYInterpolate(state,PROFILE_IMAGE_HEIGHT_INPUT_RANGE,PROFILE_IMAGE_HEIGHT_OUTPUT_RANGE);
}
function GenerateProfileImageMarginTop(state){
   return ScrollYInterpolate(state,PROFILE_IMAGE_MARGIN_TOP_INPUT_RANGE,PROFILE_IMAGE_MARGIN_TOP_OUTPUT_RANGE);
}
function GenerateHeaderZindex(state){  
   return ScrollYInterpolate(state,HEADERZ_INDEX_INPUT_RANGE,HEADERZ_INDEX_OUTPUT_RANGE);
}
function GenerateHeaderTitleBottom(state){
   return ScrollYInterpolate(state,HEADER_TITLE_BOTTOM_INPUT_RANGE,HEADER_TITLE_BOTTOM_OUTPUT_RANGE);
}

export { 
    
    GenerateHeaderHeight,
    GenerateProfileImageHeight,
    GenerateProfileImageMarginTop,
    GenerateHeaderZindex,
    GenerateHeaderTitleBottom
} 


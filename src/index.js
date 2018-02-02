import b4w from "blend4web";

var m_app = b4w.app;
var m_data = b4w.data;
var m_scs = b4w.scenes;
var m_textures = b4w.textures;
var m_materials = b4w.material;
var m_assets = b4w.assets;
var m_config = b4w.config;

// Configuration
m_config.set("physics_uranium_path", "js/uranium/");

m_app.init({
    canvas_container_id: "main_canvas_container",
    callback: load_cb,
    autoresize: true
})

function load_cb() {
    m_data.load("_scenes/simple_application.json", init, loader_cb);
}

function loader_cb(percentage, load_time) {
    // console.log(percentage+'%');
}

function init() {
    m_app.enable_camera_controls();
    console.log('INIT');
    
}
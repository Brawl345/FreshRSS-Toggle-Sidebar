<?php

class ToggleSidebarExtension extends Minz_Extension {

    public function init() {
        Minz_View::appendScript($this->getFileUrl('script.js', 'js'),'','','');   
        Minz_View::appendStyle($this->getFileUrl('style.css', 'css'));
    }

}

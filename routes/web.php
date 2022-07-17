<?php

Route::get('/{any}', 'AdminAppController@index')->where('any', '.*');

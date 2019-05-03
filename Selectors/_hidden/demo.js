// In some browsers :hidden includes head, title, script, etc...
var hiddenElements = $( "body" ).find( ":hidden" ).not( "script" );

$( "span:first" ).text( "Found " + hiddenElements.length + " hidden elements total." );
$( "div:hidden" ).show( 3000 );
$( "span:last" ).text( "Found " + $( "input:hidden" ).length + " hidden inputs." );

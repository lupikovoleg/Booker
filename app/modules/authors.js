/*
 * Authors
 */
module.exports = function( db ) {
  return {
    view: function( req, res ) {
      db.collection( 'books' ).find( { 'author' : req.params[ 'id' ] } ).toArray( function( err, items ) {
        if( items ) {
    			res.send( 200, items );
    		} else {
    			res.send( 204, { 'code': '204', 'description': 'Author not found' } );
    		}
      });
    }, 
  }
}
# @aphorica/read-plugin

Load, parse, and return an interpreted plugin object.

Seems like in the past, 'require' worked in a dynamic context,
but no more, especially in a webpack environment.

Alternative is to load all plugins at once into something
like an indexed group and access them from the group as needed.

I'd just as soon keep unused code out of the build, if I can.

<table><tr>
<th valign="top">NOTE:</th>
<td>Is this a security issue?  Might be in a web context, less convinced it's an issue
in an <em>electron</em> environment (where I'm currently using it.)</td>
</tr></table>


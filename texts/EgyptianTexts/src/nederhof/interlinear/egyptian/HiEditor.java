/***************************************************************************/
/*                                                                         */
/*  HiEditor.java                                                          */
/*                                                                         */
/*  Copyright (c) 2009 Mark-Jan Nederhof                                   */
/*                                                                         */
/*  This file is part of the implementation of PhilologEG, and may only be */
/*  used, modified, and distributed under the terms of the                 */
/*  GNU General Public License (see doc/GPL.TXT).                          */
/*  By continuing to use, modify, or distribute this file you indicate     */
/*  that you have read the license and understand and accept it fully.     */
/*                                                                         */
/***************************************************************************/

// Editor for translation.

package nederhof.interlinear.egyptian;

import java.util.*;

import nederhof.interlinear.frame.*;

public class HiEditor extends StyledPhraseEditor {

    public HiEditor(int tierNum, String name, Vector parts) {
	super(new HiEditPopup(), tierNum, name, parts);
    }

    protected Vector toEditParts(Vector parts) {
        return ParsingHelper.toEdit(parts);
    }

    protected Vector fromEditParts(Vector parts) {
	Vector edited = ParsingHelper.fromEdit(parts);
	PhraseEditHelper.normalizeHieroTier(edited);
        return edited;
    }

}

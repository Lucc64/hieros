package nederhof.res.operations;

import java.util.*;

public class NormalizerSimilar extends NormalizerFromFile {

    // At most one copy loaded.
    private static TreeMap<String,String> mapping = null;

    public NormalizerSimilar() {
	super("data/ortho/similar.xml");
    }

    protected TreeMap<String,String> getMapping() {
        return mapping;
    }
    protected void initializeMapping() {
        mapping = new TreeMap<String,String>();
    }

}
